from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail
import requests

@api_view(['POST'])
@permission_classes([AllowAny])
def send_email(request):
    subject = request.data.get('subject', '')
    message = request.data.get('message', '')
    sender = request.data.get('sender', '')
    recipient = request.data.get('recipient', '')
    recipient = 'drewrc00@gmail.com'
    
    send_mail(
        subject=subject,
        message=message,
        from_email=sender,
        recipient_list=[recipient],
        fail_silently=False,
    )
    
    return Response({'message': 'Email sent successfully!'})


@api_view(['GET'])
@permission_classes([AllowAny])
def github_repos(request):
    response = requests.get(f'https://api.github.com/users/drewrc/repos')
    repos = response.json()
    return Response(repos)
