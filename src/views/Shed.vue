<template>
    <div>
        <v-alert
        prominent
        type="success"
        >
        <v-row align="center">
            <v-col class="grow">Agregue un galpon con la fecha inicial de las aves, número de aves y el tipo de ave</v-col>
            <v-col class="shrink">
            <v-btn color="white" outlined dark @click="addBasic()">Agregar galpon
                <v-icon>mdi-cowboy</v-icon>
            </v-btn>
            </v-col>
        </v-row>
        </v-alert>
        <v-card v-for="(shed, i) in sheds" :key="i">
            <v-card-title primary-title>
                Galpon {{shed.id}}
            </v-card-title>
            <v-card-text>
                <b-form @submit="onSubmit" @reset="onReset">
                    <b-form-group
                        id="input-group-1"
                        label="Nombre del Galpon:"
                        label-for="input-1"
                        description="We'll never share your email with anyone else."
                    >
                        <b-form-input
                        id="input-1"
                        v-model="shed.label"
                        type="text"
                        required
                        placeholder="Nombre del Galpon"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Fecha de ingreso:" label-for="input-3">
                        <b-form-input
                        id="input-3"
                        v-model="shed.initialDate"
                        type="date"
                        required
                        placeholder="Fecha de Ingreso del Galpon"
                        ></b-form-input>
                    </b-form-group>

                    <!-- <b-form-group id="input-group-4">
                        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                        <b-form-checkbox value="me">Check me out</b-form-checkbox>
                        <b-form-checkbox value="that">Check that out</b-form-checkbox>
                        </b-form-checkbox-group>
                    </b-form-group> -->

                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
            </v-card-text>
        </v-card>
        {{sheds}}
        {{basic}}
    </div>
</template>
<script>
export default {
    data: () => ({
        sheds: [],
        basic: {
            id: '',
            label: '',
            initialDate: '',
            initialNumber: '',
            name: '',
            number: ''
        }
    }),
    methods: {
        addBasic: function(){
            let b = Object.assign({}, this.basic)
            b.id = this.sheds.length + 1;
            this.sheds.push(b)
        }
    },
}
</script>