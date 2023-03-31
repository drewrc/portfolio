from django.urls import include, path


app_name = "portfolio"


urlpatterns = [
   path('', include('accounts.urls'), name="accounts"),
]
