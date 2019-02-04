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
                IList<T> objects = session.CreateCriteria(typeof(T)).List<T>();
                return objects;
            }
        }

        public Dictionary<string, object> Paginate(int page = 1, int amount = 200)
        {
            var sessionFactory = DatabaseHandler.CreateSessionFactory();
            using (var session = sessionFactory.OpenSession())
            {
                page = page > 0 ? page : 1;
                Dictionary<string, object> paginationData = new Dictionary<string, object>();
                int count = session.Query<T>().Count();
                int currentPage = page;
                int numPages = count / amount;
                List<int> pages = Enumerable.Range(1, numPages).ToList();
                IList<T> objects = session.Query<T>().Skip((page - 1) * amount).Take(amount).ToList<T>();
                paginationData.Add("count", count);
                paginationData.Add("currentPage", currentPage);
                paginationData.Add("pages", pages);
                paginationData.Add("data", objects);
                return paginationData;
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