from django.http import JsonResponse


def get_data(request):
    return JsonResponse({'data': [1, 2, 3]})
