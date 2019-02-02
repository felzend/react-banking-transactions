using BankTransactions.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BankTransactions.Repository
{
    public abstract class Repository<T>
    {
        public IList<T> All()
        {
            var sessionFactory = DatabaseHandler.CreateSessionFactory();
            using (var session = sessionFactory.OpenSession())
            {
                return session.CreateCriteria(typeof(T)).List<T>();
            }
        }

        public T Get(long id)
        {
            var sessionFactory = DatabaseHandler.CreateSessionFactory();
            using (var session = sessionFactory.OpenSession())
            {
                return session.Get<T>(id);
            }
        }

        public virtual void Add(T entity)
        {
            var sessionFactory = DatabaseHandler.CreateSessionFactory();
            using (var session = sessionFactory.OpenSession())
            {
                using (var transaction = session.BeginTransaction())
                {
                    session.SaveOrUpdate(entity);
                    transaction.Commit();
                }
            }
        }
    }
}