# Generated by Django 5.0.3 on 2024-03-20 21:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main_page', '0002_remove_tag_projects_alter_project_description_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='image_of_video',
        ),
    ]
