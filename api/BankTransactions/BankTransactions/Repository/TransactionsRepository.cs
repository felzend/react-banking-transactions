using BankTransactions.Database;
using BankTransactions.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankTransactions.Repository
{
    public class TransactionsRepository : Repository<Transaction>
    {
        public void Import(IList<TransactionRow> rows, int accountId)
        {
            var sessionFactory = DatabaseHandler.CreateSessionFactory();
            using (var session = sessionFactory.OpenSession())
            {
                using (var transaction = session.BeginTransaction())
                {
                    foreach (TransactionRow row in rows)
                    {
                        Transaction tr = new Transaction();
                        tr.Account = session.Load<Account>(Convert.ToInt64(accountId));
                        tr.TransactionType = session.Load<TransactionType>(Convert.ToInt64(row.TransactionType_id));
                        tr.Value = row.Value;
                        tr.Description = row.Description;
                        tr.Date = row.Date;

                        session.SaveOrUpdate(tr);                        
                    }

                    transaction.Commit();
                }
            }
        }
    }
}
