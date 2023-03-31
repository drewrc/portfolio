from django.urls import path
from .views import send_email
# from .views import ProfileCreateAPIView


app_name = 'accounts'


# urlpatterns = [
#    path('profiles/', ProfileCreateAPIView.as_view(), name="profile_add"),
# ]


urlpatterns = [
    path('send-email/', send_email, name='send_email'),
]