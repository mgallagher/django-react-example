from django.http import JsonResponse
from django.shortcuts import render


def index(request):
	return render(request, 'index.html')


def get_some_data(request):
    return JsonResponse({'data': [1, 2, 3]})
