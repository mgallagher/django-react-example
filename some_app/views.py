from django.http import JsonResponse


def get_some_data(request):
    return JsonResponse({'data': [1, 2, 3]})
