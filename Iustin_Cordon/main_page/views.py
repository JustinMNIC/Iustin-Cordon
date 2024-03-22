from django.shortcuts import render
from .models import Project, Tag

def get_projects_count_for_tag(tag_name):
    return Project.objects.filter(tags__name=tag_name).count()

def main_index(request):
    websites_projects_count = get_projects_count_for_tag('Website')
    app_projects_count = get_projects_count_for_tag('Web App')
    local_projects_count = get_projects_count_for_tag('Local')
    games_projects_count = get_projects_count_for_tag('Game')
    bots_projects_count = get_projects_count_for_tag('Bot')
    
    projects = Project.objects.all()
    tags_or_skills = Tag.objects.all()
    
    return render(request, 'main_page/index.html', {
        'websites_projects_count': websites_projects_count,
        'app_projects_count': app_projects_count,
        'local_projects_count': local_projects_count,
        'games_projects_count': games_projects_count,
        'bots_projects_count': bots_projects_count,
        'projects': projects,
        'tags_or_skills': tags_or_skills
    })
