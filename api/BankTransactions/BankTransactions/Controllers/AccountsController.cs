using System;
using BankTransactions.Model;
using BankTransactions.Modules;
using BankTransactions.Repository;
using Microsoft.AspNetCore.Mvc;
using Ninject;

namespace BankTransactions.Controllers
{
    [Route("api/accounts")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        public AccountsRepository Repository { get; set; }

        public AccountsController()
        {
            IKernel kernel = new StandardKernel(new BankingModule());
            this.Repository = kernel.Get<AccountsRepository>();
        }

        [HttpGet]
        public IActionResult Index()
        {
            return Ok(this.Repository.All());
        }

        [HttpPost]
        public IActionResult Add([FromBody]Account account)
        {
            try
            {
                this.Repository.Add(account);
                return Ok("Conta criada com sucesso!");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}