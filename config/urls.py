from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView

from config import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('apiv1/', include("comidt.urls")),


    re_path('(^(?!(apiv1|admin|static|images|media)).*$)', TemplateView.as_view(template_name="index.html")),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# MEDIA_URL = "/images/"      MEDIA_ROOT = BASE_DIR / "frontend/build/images"
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
# STATIC_URL = '/static/'     STATIC_ROOT = BASE_DIR / "static"
urlpatterns += static(settings.IMAGE_URL, document_root=settings.IMAGE_ROOT)
# IMAGE_URL = '/images/'        IMAGE_ROOT = BASE_DIR / "frontend/build/images"
