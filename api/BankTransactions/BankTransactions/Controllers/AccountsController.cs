using System;
using System.Collections.Generic;
using BankTransactions.Model;
using BankTransactions.Modules;
using BankTransactions.Repository;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Ninject;

namespace BankTransactions.Controllers
{
    [Route("api/accounts")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        public AccountsRepository Repository { get; set; }
        public AccountTypesRepository AccountTypesRepository { get; set; }

        public AccountsController()
        {
            IKernel kernel = new StandardKernel(new BankingModule());
            this.Repository = kernel.Get<AccountsRepository>();
            this.AccountTypesRepository = kernel.Get<AccountTypesRepository>();
        }

        [HttpGet]
        public IActionResult Index()
        {
            return Ok(this.Repository.All());
        }

        [HttpPost]
        [Route("add")]
        public IActionResult Add([FromBody]JObject account)
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

        [HttpGet]
        [Route("get/{id}")]
        public IActionResult Get(long id)
        {
            return Ok(this.Repository.Get(id));
        }
    }
}