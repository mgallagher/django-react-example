from django.http import JsonResponse


def get_other_data(request):
    return JsonResponse({'data': [1, 2, 3]})
