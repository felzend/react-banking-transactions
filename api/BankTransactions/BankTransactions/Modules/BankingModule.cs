using BankTransactions.Repository;
using Ninject.Modules;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankTransactions.Modules
{
    public class BankingModule : NinjectModule
    {
        public override void Load()
        {
            this.Bind<AccountTypesRepository>().ToSelf();
            this.Bind<AccountsRepository>().ToSelf();            
            this.Bind<TransactionTypesRepository>().ToSelf();
            this.Bind<TransactionsRepository>().ToSelf();
            this.Bind<BanksRepository>().ToSelf();
        }
    }
}
