from django.shortcuts import redirect, render
from django.views.decorators.http import require_POST
from .forms import TrackerForm
from .models import Tracker

# Create your views here.
def index(request):
    tracker_list = Tracker.objects.order_by('id')
    form = TrackerForm
    context = {'tracker_list': tracker_list, "form": form}
    return render(request, 'tracker/index.html', context)

@require_POST
def addTracker(request):
    form = TrackerForm(request.POST)

    print(request.POST['text'])

    if form.is_valid():
        new_tracker = Tracker(text=request.POST['text'])
        new_tracker.save()

    return redirect('tracker:index')


def completeTracker(request, tracker_id):
    tracker = Tracker.objects.get(pk=tracker_id)
    tracker.complete = True
    tracker.save()

    return redirect('tracker:index')


def deleteCompleted(request):
    Tracker.objects.filter(complete__exact=True).delete()

    return redirect('tracker:index')


def deleteAll(request):
    Tracker.objects.all().delete()

    return redirect('tracker:index')