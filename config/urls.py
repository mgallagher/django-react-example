from django.conf.urls import url
from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from intranet_app.views import index as intranet_index, get_data
from public_app.views import index as public_index


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', intranet_index),
    url(r'public', public_index),
    url(r'some_data/', get_data),
] + staticfiles_urlpatterns()
