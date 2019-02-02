using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BankTransactions.Model;
using BankTransactions.Modules;
using BankTransactions.Repository;
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

        public TransactionsController()
        {
            IKernel kernel = new StandardKernel(new BankingModule());
            this.Repository = kernel.Get<TransactionsRepository>();
        }

        [HttpGet]
        public IActionResult Index()
        {
            return Ok(this.Repository.All());
        }

        [HttpPost]
        [Route("add")]
        public IActionResult Add([FromBody]Transaction transaction)
        {
            try
            {
                this.Repository.Add(transaction);
                return Ok("Transação inserida com sucesso!");
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}