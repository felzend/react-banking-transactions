using BankTransactions.Database;
using BankTransactions.Model;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankTransactions.Repository
{
    public class AccountsRepository : Repository<Account>
    {
        public void Add(JObject entity)
        {
            var sessionFactory = DatabaseHandler.CreateSessionFactory();
            using (var session = sessionFactory.OpenSession())
            {                
                using (var transaction = session.BeginTransaction())
                {
                    try
                    {
                        AccountType accountType = session.Get<AccountType>(entity["AccountType_id"].ToObject<long>());
                        entity.Add("AccountType", JToken.FromObject(accountType));
                        Account account = entity.ToObject<Account>();
                        session.SaveOrUpdate(account);
                        transaction.Commit();
                    }
                    catch(Exception e)
                    {
                        throw new Exception(e.Message);
                    }
                }
            }
        }
    }
}
