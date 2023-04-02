from django.urls import path
from .views import send_email, github_repos
# from .views import ProfileCreateAPIView


app_name = 'accounts'


# urlpatterns = [
#    path('profiles/', ProfileCreateAPIView.as_view(), name="profile_add"),
# ]


urlpatterns = [
    path('send-email/', send_email, name='send_email'),
    path('github_repos/', github_repos, name='github_repos'),
]