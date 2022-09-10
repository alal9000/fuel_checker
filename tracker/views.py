from django.shortcuts import redirect, render
from django.views.decorators.http import require_POST
from .forms import TodoForm
from .models import Todo

# Create your views here.
def index(request):
    todo_list = Todo.objects.order_by('id')
    form = TodoForm
    context = {'todo_list': todo_list, "form": form}
    return render(request, 'tracker/index.html', context)

@require_POST
def addTodo(request):
    form = TodoForm(request.POST)

    print(request.POST['text'])

    if form.is_valid():
        new_todo = Todo(text=request.POST['text'])
        new_todo.save()

    return redirect('tracker:index')


def completeTodo(request, todo_id):
    todo = Todo.objects.get(pk=todo_id)
    todo.complete = True
    todo.save()

    return redirect('tracker:index')


def deleteCompleted(request):
    Todo.objects.filter(complete__exact=True).delete()

    return redirect('tracker:index')


def deleteAll(request):
    Todo.objects.all().delete()

    return redirect('tracker:index')