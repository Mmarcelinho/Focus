using Microsoft.EntityFrameworkCore;

namespace ProjetoTcc.Models
{
    public class Contexto : DbContext
    {
        public DbSet<Tarefa> Tarefas { get; set; }

        public Contexto(DbContextOptions<Contexto> opcoes) : base(opcoes)
        {

        }
    }
}
