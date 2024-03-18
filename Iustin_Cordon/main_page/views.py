from django.shortcuts import render

# Create your views here.
def main_index(request):
    return render(request, 'main_page/index.html')
