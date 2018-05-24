from __future__ import print_function
import os

from django.http import JsonResponse
from django.shortcuts import render


def index(request):
    hostname = os.environ['HOST']
    webpack_dev_server_url = 'http://{host}:{port}/intranet_app/js/bundle.js'.format(host=hostname, port=9000)
    print('*** HOSTNAME: ' + hostname + ' ***')
    print('*** WEBPACK DEV SERVER URL: ' + webpack_dev_server_url + ' ***')
    return render(request, 'index.html', context={'webpack_dev_server_url': webpack_dev_server_url})


def get_data(request):
    return JsonResponse({'data': [1, 2, 3]})
