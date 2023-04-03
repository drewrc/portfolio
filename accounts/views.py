from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail
import os
import requests
from django.views.decorators.csrf import csrf_exempt


@api_view(['POST'])
@permission_classes([AllowAny])
@csrf_exempt
def send_email(request):
    subject = request.data.get('subject', '')
    message = request.data.get('message', '')
    sender = request.data.get('sender', '')
    # recipient = request.data.get('recipient', '')
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
    github_key = os.environ.get('GITHUB_KEY')
    headers = {
        'Authorization': f'Bearer {github_key}',
        'Accept': 'application/vnd.github.v3+json'
    }
    version = '2022-11-28' 
    url = f'https://api.github.com/users/drewrc/repos?access_token={github_key}'
    response = requests.get(url, headers=headers)
    repos = response.json()
    return Response(repos)
