from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from comidt.serializers import *


@api_view(['GET'])
def home(request):
    home_slider = HomeSlider.objects.all()
    home_slider_serializer = HomeSliderSerializer(home_slider, many=True)

    home_about_tab = HomeAboutTab.objects.all()[:3]
    home_about_tab_serializer = HomeAboutTabSerializer(home_about_tab, many=True)

    home_about_tile = HomeAboutTile.objects.all()
    home_about_tile_serializer = HomeAboutTileSerializer(home_about_tile, many=True)

    home_about_customer = HomeAboutCustomer.objects.all()
    home_about_customer_serializer = HomeAboutCustomerSerializer(home_about_customer, many=True)

    return Response({'homeSlider': home_slider_serializer.data,
                     'homeAboutTab': home_about_tab_serializer.data,
                     'homeAboutTile': home_about_tile_serializer.data,
                     'homeAboutCustomer': home_about_customer_serializer.data,
                     })


@api_view(['GET'])
def departments(request):
    departments = ServicesDepartment.objects.all()
    departments_serializer = ServicesDepartmentSerializer(departments, many=True)
    return Response(departments_serializer.data)
