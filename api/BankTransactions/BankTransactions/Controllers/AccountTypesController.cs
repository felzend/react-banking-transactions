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
    [Route("api/account-types")]
    [ApiController]
    public class AccountTypesController : ControllerBase
    {
        public AccountTypesRepository Repository { get; set; }

        public AccountTypesController()
        {
            IKernel kernel = new StandardKernel(new BankingModule());
            this.Repository = kernel.Get<AccountTypesRepository>();
        }

        [HttpGet]
        public IActionResult Index()
        {
            return Ok(this.Repository.All());
        }

        [HttpGet]
        [Route("get/{id}")]
        public IActionResult Get(long id)
        {
            return Ok(this.Repository.Get(id));
        }
    }
}