from rest_framework import serializers
from comidt.models import *


class HomeSliderSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeSlider
        fields = '__all__'


class HomeAboutTabSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeAboutTab
        fields = '__all__'


class HomeAboutTileSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeAboutTile
        fields = '__all__'


class HomeAboutCustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeAboutCustomer
        fields = '__all__'


class ServicesSocialNetworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicesSocialNetwork
        fields = '__all__'


class ServicesProjectMapSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicesProjectMap
        fields = '__all__'


class ServicesProjectPerspectiveSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicesProjectPerspective
        fields = '__all__'


class ServicesProjectExecutionStepsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicesProjectExecutionSteps
        fields = '__all__'


class ServicesProjectSerializer(serializers.ModelSerializer):
    map = ServicesProjectMapSerializer(read_only=True, many=True)
    perspective = ServicesProjectPerspectiveSerializer(read_only=True, many=True)
    execution_step = ServicesProjectExecutionStepsSerializer(read_only=True, many=True)

    class Meta:
        model = ServicesProject
        fields = '__all__'


class ServicesDepartmentSerializer(serializers.ModelSerializer):
    project = ServicesProjectSerializer(read_only=True, many=True)
    social_network = ServicesSocialNetworkSerializer(read_only=True, many=True)

    class Meta:
        model = ServicesDepartment
        fields = '__all__'

