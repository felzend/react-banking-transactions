using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using BankTransactions.Middleware;
using BankTransactions.Model;
using BankTransactions.Modules;
using BankTransactions.Repository;
using BankTransactions.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Ninject;

namespace BankTransactions.Controllers
{
    [Route("api/transactions")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {
        public TransactionsRepository Repository { get; set; }
        private readonly IHostingEnvironment _hostingEnvironment;

        public TransactionsController(IHostingEnvironment hostingEnvironment)
        {
            IKernel kernel = new StandardKernel(new BankingModule());
            this.Repository = kernel.Get<TransactionsRepository>();
            this._hostingEnvironment = hostingEnvironment;
        }

        [HttpGet]
        public IActionResult Index()
        {
            try
            {
                int page = Convert.ToInt32(HttpContext.Request.Query["page"]);
                return Ok(this.Repository.Paginate(page));
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        [Route("add")]
        public async Task<IActionResult> Add()
        {
            try
            {
                int account = int.Parse(HttpContext.Request.Form["Account"]);
                var file = HttpContext.Request.Form.Files[0];
                var fileId = "tws" + DateTimeOffset.UtcNow.ToUnixTimeSeconds();
                var filePath = Path.GetTempFileName();
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                var fileExtension = Path.GetExtension(fileName);
                fileName = fileId + fileExtension;
                fileName = Path.Combine(this._hostingEnvironment.ContentRootPath, "Uploads/") + fileName;

                using (var stream = new FileStream(fileName, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                    stream.Close();
                    
                    IList<TransactionRow> transactions = CsvTransactionService.GetTransactions(fileName);
                    this.Repository.Import(transactions, account);
                    await WebSocketMiddleware.Broadcast(transactions.Count + " novas transações importadas!");
                }
                
                return Ok("Transação inserida com sucesso!");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet]
        [Route("get/{id}")]
        public IActionResult Get(long id)
        {
            return Ok(this.Repository.Get(id));
        }
    }
}