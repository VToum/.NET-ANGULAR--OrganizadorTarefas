using Microsoft.EntityFrameworkCore;
using Organizador_de_Tarefas.Models;

namespace Organizador_de_Tarefas.Context
{
    public class TarefaContext : DbContext
    {
        public TarefaContext(DbContextOptions<TarefaContext> options) : base(options) { } 
        
        public DbSet<Tarefa> Tarefas { get; set; }

    }
}
