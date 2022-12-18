from django.urls import path
from .views import index

urlpatterns = [
    # path('<path:route>', index),
    path('', index),
    path('signUp/', index),
    # path('registration/', index),
    path('catalogWorker/', index),
    path('catalogAdmin/', index),
    path('fileWorker/', index),
    path('fileAdmin/', index),
    path('profileWorker/', index),
    path('profileAdmin/', index),
    path('listWorker/', index),
    path('newProfile/', index),
    path('createProfile/', index),
    path('editProfile/', index),
]