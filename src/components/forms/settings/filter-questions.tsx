"use client";

import Section from "@/components/section-label";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useFilterQuestions } from "@/hooks/settings/use-settings";
import FormGenerator from "../form-generator";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/loader";

type Props = {
  id: string;
};

const FilterQuestions = ({ id }: Props) => {
  const { register, loading, onAddFilterQuestions, errors, isQuestions } =
    useFilterQuestions(id);
  return (
    <Card className="w-full grid grid-cols-1 lg:grid-cols-2">
      <CardContent className="p-6 border-r-[1px]">
        <CardTitle>Bot Questions</CardTitle>
        <form
          className="flex flex-col gap-6 mt-10"
          onSubmit={onAddFilterQuestions}
        >
          <div className="flex flex-col gap-3">
            <Section
              label="Question"
              message="Add a question that you want your chatbot to ask"
            />
            <FormGenerator
              inputType="input"
              register={register}
              errors={errors}
              form="filter-question-form"
              name="question"
              placeholder="Type your question"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-3">
            <Section
              label="Answer to questions"
              message="The answer for the question above"
            />
            <FormGenerator
              inputType="textarea"
              register={register}
              errors={errors}
              form="filter-questions-form"
              name="answer"
              placeholder="Type your answer"
              type="text"
              lines={5}
            />
          </div>
          <Button
            type="submit"
            className="bg-orange hover:bg-orange hover:opacity-70 transition duration-150 ease-in-out text-white font-semibold"
          >
            Create
          </Button>
        </form>
      </CardContent>
      <CardContent className="p-6 overflow-y-auto chat-window">
        <Loader loading={loading}>
          {isQuestions.length ? (
            isQuestions.map((question) => {
              return (
                <p className="font-bold" key={question.id}>
                  {question.question}
                </p>
              );
            })
          ) : (
            <CardDescription>No Question</CardDescription>
          )}
        </Loader>
      </CardContent>
    </Card>
  );
};

export default FilterQuestions;
