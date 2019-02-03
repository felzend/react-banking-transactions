using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NHibernate;
using FluentNHibernate.Cfg;
using Microsoft.Extensions.Configuration;
using System.IO;
using BankTransactions.Model;
using NHibernate.Tool.hbm2ddl;

namespace BankTransactions.Database
{
    public class DatabaseHandler
    {
        public static ISessionFactory CreateSessionFactory()
        {
            var builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json");
            var settings = builder.Build();

            var config = Fluently
                .Configure()
                .Database(FluentNHibernate.Cfg.Db.MsSqlConfiguration.MsSql2012.ConnectionString(settings["ConnectionString"]))                
                .Mappings(x => x.FluentMappings.AddFromAssemblyOf<AccountType>())
                .Mappings(x => x.FluentMappings.AddFromAssemblyOf<TransactionType>())
                .Mappings(x => x.FluentMappings.AddFromAssemblyOf<Bank>())
                .Mappings(x => x.FluentMappings.AddFromAssemblyOf<Account>())
                .Mappings(x => x.FluentMappings.AddFromAssemblyOf<Transaction>())
                .BuildConfiguration();

            new SchemaUpdate(config).Execute(false, true);
            return config.BuildSessionFactory();
        }
    }
}
