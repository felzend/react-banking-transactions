using BankTransactions.Model;
using CsvHelper;
using CsvHelper.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace BankTransactions.Services
{
    public class CsvTransactionService
    {
        public class TRMap : ClassMap<TransactionRow>
        {
            public TRMap()
            {
                Map(x => x.Value);
                Map(x => x.Description);
                Map(x => x.TransactionType_id);
                Map(x => x.Date);
            }
        }

        public static IList<TransactionRow> GetTransactions(string file)
        {
            try
            {
                using (var reader = new StreamReader(file))
                using (var csv = new CsvReader(reader))
                {
                    csv.Configuration.Delimiter = ";";
                    return csv.GetRecords<TransactionRow>().ToList();
                }
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }
    }
}
