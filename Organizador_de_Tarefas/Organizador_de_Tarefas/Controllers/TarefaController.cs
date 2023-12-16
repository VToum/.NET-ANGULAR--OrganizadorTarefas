using Microsoft.AspNetCore.Mvc;
using Organizador_de_Tarefas.Context;
using Organizador_de_Tarefas.Models;

namespace Organizador_de_Tarefas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TarefaController : ControllerBase
    {
        #region Tarefa Context
        private readonly TarefaContext _context;
        public TarefaController(TarefaContext context)
        {
            _context = context;
        }
        #endregion

        [HttpPost("CriarTarefa")]
        public IActionResult CriarTarefa(Tarefa tarefa)
        {
            if (tarefa.Data == DateTime.MinValue)
                return BadRequest($"Data não pode ser vazio");

            _context.Add(tarefa);
            _context.SaveChanges();

            return Ok($"Uma Tarefa foi Adicionado com sucesso! {tarefa}");
        }

        [HttpGet("{id}")]
        public IActionResult ObterTarefa(int id)
        {
            var tarefaBanco = _context.Tarefas.Find(id);

            if (tarefaBanco == null)
                return NoContent();

            return Ok(tarefaBanco);
        }

        [HttpGet("BuscarTodos")]
        public IActionResult BuscarTodasTarefas()
        {
            var tarefaBanco = _context.Tarefas.Where(x => x.Id != 0);
            return Ok(tarefaBanco);
        }

        [HttpGet("ObterPorTitulo")]
        public IActionResult ObterPorTitulo(string titulo)
        {
            var buscarBanco = _context.Tarefas.Where(t => t.Titulo == titulo);

            if (buscarBanco == null)
                NotFound($"Titulo não encontrado");

            return Ok(buscarBanco);
        }

        [HttpGet("ObterPorData")]
        public IActionResult ObterPorData(DateTime data)
        {
            var buscarBanco = _context.Tarefas.Where(d => d.Data.Date == data.Date);

            if (buscarBanco == null)
                NotFound($"Data não encontrado");

            return Ok(buscarBanco);
        }

        [HttpGet("ObterPorStatus")]
        public IActionResult ObterPorStatus(EnumStatusTarefa status)
        {
            if (status == 0)
            {
                var statusPendente = _context.Tarefas.Find(0);
            }
            else
            {
                var statusFinalizado = _context.Tarefas.Find(1);
            }

            var tarefa = _context.Tarefas.Where(t => t.Status == status);
            return Ok(tarefa);
        }

        [HttpDelete("{id}")]
        public IActionResult RemoverTarefa(int id)
        {
            var tarefaBanco = _context.Tarefas.Find(id);

            if (tarefaBanco == null)
                return NotFound($"Erro ao remover");

            _context.Remove(tarefaBanco);
            _context.SaveChanges();

            return Ok($"id: {id}, foi removido.");
        }

        [HttpPut("{id}")]
        public IActionResult AtualizarTarefa(int id, Tarefa tarefa)
        {
            var tarefaBanco = _context.Tarefas.Find(id);

            if (tarefaBanco == null)
                return NotFound($"Erro ao atualizar");

            tarefaBanco.Titulo = tarefa.Titulo;
            tarefaBanco.Descricao = tarefa.Descricao;
            tarefaBanco.Data = tarefa.Data;

            _context.Update(tarefaBanco);
            _context.SaveChanges();

            return Ok($"{tarefa.Titulo}, foi atualizado com sucesso.");

        }
    }
}
