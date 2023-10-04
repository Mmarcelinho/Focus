using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoTcc.Models;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoTcc.ViewComponents
{
    public class ListaTarefasViewComponent : ViewComponent
    {
        private readonly Contexto _contexto;
        public ListaTarefasViewComponent(Contexto contexto)
        {
            _contexto = contexto;
        }
        public async Task<IViewComponentResult> InvokeAsync(string data)
        {
            return View(await _contexto.Tarefas
                .OrderBy(testc => testc.Horario).Where(testc => testc.Data == data).ToListAsync());
        }


    }
}
