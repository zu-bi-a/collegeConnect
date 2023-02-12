from rest_framework import serializers
from API.models import UserModel, DocData


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'
    
    # For Partial Updating
    def __init__(self, *args, **kwargs):
        kwargs['partial'] = True
        super(UserSerializer, self).__init__(*args, **kwargs)

class DocDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocData()
        fields = '__all__'
    
    # For Partial Updating
    def __init__(self, *args, **kwargs):
        kwargs['partial'] = True
        super(DocDataSerializer, self).__init__(*args, **kwargs)