import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { Modal } from "@coralinepa/react-modal";

import { useEmployees } from "../hooks/useEmployees";

import {
  Card,
  Label,
  Input,
  Legend,
  Button,
  Fieldset,
} from "../components/atoms";

import {
  DatePicker,
  CountrySelect,
  DepartmentSelect,
} from "../components/molecules";
import { Panel } from "../components/organisms";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function Home() {
  const { addEmployee } = useEmployees();
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
    addEmployee({
      ...values,
      startDate: values.startDate?.toISOString().split("T")[0],
      birthDate: values.birthDate?.toISOString().split("T")[0],
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Panel>
      <Form onSubmit={handleSubmit(handleCreate)}>
        <Card>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            {...register("firstName")}
            id="firstName"
            placeholder="First Name"
            autoComplete="off"
            required
          />
        </Card>
        <Card>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            {...register("lastName")}
            id="lastName"
            placeholder="Last Name"
            autoComplete="off"
            required
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
                required
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
                required
              />
            )}
          />
        </Card>
        <Fieldset>
          <Legend>Address</Legend>
          <Card>
            <Label htmlFor="street">Street</Label>
            <Input
              {...register("street")}
              id="street"
              placeholder="Street"
              autoComplete="off"
              required
            />
          </Card>
          <Card>
            <Label htmlFor="city">City</Label>
            <Input
              {...register("city")}
              id="city"
              placeholder="City"
              autoComplete="off"
              required
            />
          </Card>
          <Card>
            <Label htmlFor="state">State</Label>
            <CountrySelect
              value={watch("state")}
              onChange={(value) => setValue("state", value)}
              required
            />
          </Card>
          <Card>
            <Label htmlFor="zipCode">Zip Code</Label>
            <Input
              {...register("zipCode")}
              id="zipCode"
              placeholder="Zip Code"
              autoComplete="off"
              required
            />
          </Card>
        </Fieldset>
        <Card>
          <Label htmlFor="department">Department</Label>
          <DepartmentSelect
            value={watch("department")}
            onChange={(value) => setValue("department", value)}
            required
          />
        </Card>
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
      </Form>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Employee created.</h2>
      </Modal>
    </Panel>
  );
}

Home.propTypes = {
  data: PropTypes.object,
};

export default Home;
