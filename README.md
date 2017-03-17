# OrderDate
Sort by ascending several dates in javascript

## Usage

### Parameter

An array with dates. Format 'little endian' **DD / MM / YY**.

### Return

An array with dates sorted in ascending order :smirk:. Format 'little endian' **DD / MM / YY**.

### Exemple

``` js
<script>

  var sortDate = orderDate(['13/12/17', '01/05/17', '03/04/17', '24/11/17']);
  
  console.log(sortDate);
  
</script>

// display : ["03/04/17", "01/05/17", "24/11/17", "13/12/17"]
```


