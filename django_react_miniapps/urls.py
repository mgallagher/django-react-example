from django.conf.urls import url
from django.contrib import admin

from intranet_app.views import index, get_some_data
from public_app.views import get_other_data


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'', index),
    url(r'some_data/', get_some_data),
    url(r'other_data/', get_other_data)
]
