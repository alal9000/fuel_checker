from django.urls import path
from . import views

app_name = 'tracker'
urlpatterns = [
    path('', views.index, name="index"),
    path('add', views.addTracker, name="add"),
    path('complete/<tracker_id>', views.completeTracker, name="complete"),
    path('deletecomplete', views.deleteCompleted, name="deletecomplete"),
    path('deleteall', views.deleteAll, name="deleteall")
]