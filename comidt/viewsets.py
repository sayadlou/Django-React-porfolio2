from rest_framework import viewsets, mixins
from rest_framework.authentication import TokenAuthentication
from rest_framework.viewsets import GenericViewSet
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from comidt.serializers import *


class MyViewSet(mixins.RetrieveModelMixin,
                mixins.ListModelMixin,
                GenericViewSet):
    """Handle creating and updating profiles"""
    # authentication_classes = (TokenAuthentication,)
    # permission_classes = (permissions.IsAdminUser,)
    # filter_backends = (filters.SearchFilter,)
    # search_fields = ('title',)


class ServicesProjectViewSet(MyViewSet):
    """Handle Project"""
    serializer_class = ServicesProjectSerializer
    queryset = ServicesProject.objects.all()
    # filterset_class = filters.PostFilter
    # search_fields = ["title"]


class ServicesDepartmentViewSet(MyViewSet):
    """Handle Department"""
    serializer_class = ServicesDepartmentSerializer
    queryset = ServicesDepartment.objects.all()
    # filterset_class = filters.PostFilter
    # search_fields = ["title"]
