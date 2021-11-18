from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import home
from .viewsets import ServicesProjectViewSet, ServicesDepartmentViewSet

router = DefaultRouter()
router.register('project', ServicesProjectViewSet)
router.register('department', ServicesDepartmentViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('home/', home, name="home"),


]
