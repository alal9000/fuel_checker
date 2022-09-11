from django import forms

class TrackerForm(forms.Form):
    text = forms.CharField(max_length=40, widget=forms.TextInput(attrs={"class": "form-control", "placeholder": "Enter todo", 'aria-label': 'Todo', 'aria-describedby':'add-btn'}))