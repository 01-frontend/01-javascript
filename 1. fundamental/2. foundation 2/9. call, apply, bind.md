# Call

Call is a method of an object that can `substitute another object for the current object`

```
  const doctor = {
    heal(bloodBonus) {
      return this.blood += bloodBonus;
    }
  }

  const wizard = {
    name: 'Merlin',
    blood: 100
  }

  console.log('before heal: ', wizard); // 100
  doctor.heal.call(wizard, 20);
  console.log('after heal: ', wizard); // 120

```

# Apply

Apply is almost identical to call, except that `instead of a comma separated list of arguments`, it `takes an array of arguments`

```
  doctor.heal.apply(wizard, [20]);

```

# Bind

Unlike call and apply, bind `does not run the method`, it `returns a new function` that can then be called later

```
  console.log('before heal: ', wizard); // 100
  const healWizard = doctor.heal.bind(wizard, 20);
  healWizard();
  console.log('after heal: ', wizard); // 120

```
