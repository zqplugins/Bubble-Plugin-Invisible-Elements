function(instance, properties, context) {

  instance.publishState('text',properties.text);
  instance.publishState('number', properties.number);
  instance.publishState('picture', properties.picture);
  instance.publishState('address', properties.address);
  instance.publishState('yes_no', properties.yes_no);
  instance.publishState('date', properties.date);
  instance.publishState('file', properties.file);
  instance.publishState('number_range', properties.number_range);
  instance.publishState('date_range', properties.date_range)
  
}