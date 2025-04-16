import PropTypes from "prop-types";

import { useSubmit } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

import Button from "../components/ui/Button";
import { Legend, Input, Label, Card, Box } from "../components/ui/Form";
import Panel from "../components/ui/Panel";
import DatePicker from "../components/ui/DatePicker";
import CountrySelect from "./CountrySelect";
import DepartmentSelect from "./DepartmentSelect";
import Modal from "../components/ui/Modal";

function Home() {
  const submit = useSubmit();

  const { register, watch, handleSubmit, control, setValue } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: null,
      startDate: null,
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreate = (values) => {
    console.log(values);
    submit(values, { method: "post", encType: "application/json" });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Panel>
      <form onSubmit={handleSubmit(handleCreate)}>
        <Card>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            {...register("firstName")}
            id="firstName"
            name="firstName"
            placeholder="First Name"
            autoComplete="off"
          />
        </Card>
        <Card>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            {...register("lastName")}
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            autoComplete="off"
          />
        </Card>
        <Card>
          <Label htmlFor="birthDate">Date of Birth</Label>
          <Controller
            name="birthDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                title="Select Date of Birth"
                selected={field.value}
                onChange={(date) => setValue("birthDate", date)}
              />
            )}
          />
        </Card>
        <Card>
          <Label htmlFor="startDate">Start Date</Label>
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                title="Select Start Date"
                selected={field.value}
                onChange={(date) => setValue("startDate", date)}
              />
            )}
          />
        </Card>
        <Box>
          <Legend>Address</Legend>
          <Card>
            <Label htmlFor="street">Street</Label>
            <Input
              {...register("street")}
              id="street"
              name="street"
              placeholder="Street"
              autoComplete="off"
            />
          </Card>
          <Card>
            <Label htmlFor="city">City</Label>
            <Input
              {...register("city")}
              id="city"
              name="city"
              placeholder="City"
              autoComplete="off"
            />
          </Card>
          <Card>
            <Label htmlFor="state">State</Label>
            <CountrySelect
              value={watch("state")}
              onChange={(value) => setValue("state", value)}
            />
          </Card>
          <Card>
            <Label htmlFor="zipCode">Zip Code</Label>
            <Input
              {...register("zipCode")}
              id="zipCode"
              name="zipCode"
              type="number"
              placeholder="Zip Code"
              autoComplete="off"
            />
          </Card>
          <Card>
            <Label htmlFor="department">Department</Label>
            <DepartmentSelect
              value={watch("department")}
              onChange={(value) => setValue("department", value)}
            />
          </Card>
        </Box>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            padding: "10px",
          }}
        >
          <Button type="submit">Save</Button>
        </div>
      </form>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Form Saved Successfully!</h2>
        <Button onClick={handleCloseModal}>Close</Button>
      </Modal>
    </Panel>
  );
}

Home.propTypes = {
  data: PropTypes.object,
};

export default Home;
