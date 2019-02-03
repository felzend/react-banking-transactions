using BankTransactions.Modules;
using BankTransactions.Repository;
using Ninject;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BankTransactions.Model;

namespace BankTransactions.Controllers
{
    [Route("api/banks")]
    [ApiController]
    public class BanksController : ControllerBase
    {
        public BanksRepository Repository { get; set; }

        public BanksController()
        {
            IKernel kernel = new StandardKernel(new BankingModule());
            this.Repository = kernel.Get<BanksRepository>();
        }

        [HttpGet]
        public IActionResult Index()
        {
            return Ok(this.Repository.All());
        }

        [HttpPost]
        [Route("add")]
        public IActionResult Add(Bank bank)
        {
            try
            {
                this.Repository.Add(bank);
                return Ok("Banco criado com sucesso!");
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
