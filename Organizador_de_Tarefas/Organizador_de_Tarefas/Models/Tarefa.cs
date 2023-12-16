using Microsoft.EntityFrameworkCore;

namespace Organizador_de_Tarefas.Models
{
    public class Tarefa
    {
        public Tarefa() { }
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public DateTime Data { get; set; }
        public EnumStatusTarefa Status { get; set; }
        public Tarefa(int id, string titulo, string descricao, DateTime data)
        {
            Id = id;
            Titulo = titulo;
            Descricao = descricao;
            Data = data;
        }
    }
}
