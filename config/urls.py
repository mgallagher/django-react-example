from django.conf.urls import url
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from intranet_app.views import index, get_data
from public_app.views import get_data


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'', index),
    url(r'some_data/', get_data),
    url(r'other_data/', get_data)
] + staticfiles_urlpatterns()
