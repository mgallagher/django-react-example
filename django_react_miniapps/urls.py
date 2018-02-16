from django.conf.urls import url
from django.contrib import admin

from some_app.views import get_some_data
from other_app.views import get_other_data


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'some_data/', get_some_data),
    url(r'other_data/', get_other_data)
]
