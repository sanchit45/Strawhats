from transformers import AutoTokenizer, T5ForConditionalGeneration

import os

os.environ['HF_HUB_DISABLE_SYMLINKS_WARNING'] = '1'


class AdverseEvents:
    _instance = None
    _model_path = "BioDEX/flan-t5-large-report-extraction"  

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance._init_()
        return cls._instance

    def _init_(self):
        self.tokenizer = self.load_tokenizer()
        self.model = self.load_model().to('cpu')
        self.input = None
        self.input_encoded = None
        self.output = None
        self.result = None

    @classmethod
    def load_tokenizer(cls):
        return AutoTokenizer.from_pretrained(cls._model_path)

    @classmethod
    def load_model(cls):
        return T5ForConditionalGeneration.from_pretrained(cls._model_path)

    def inference(self, text):
        self.input = text
        self.get_encoded_input()
        self.output = self.get_model_outputs()
        self.result = self.get_results()
        return self.result

    def get_encoded_input(self):
        if self.input is not None:
            self.input_encoded = self.tokenizer(
                self.input,
                max_length=2048,
                truncation=True,
                padding="max_length",
                return_tensors='pt'
            )

    def get_model_outputs(self):
        if self.input_encoded:
            output_encoded = self.model.generate(**self.input_encoded, max_length=256)
            output = self.tokenizer.batch_decode(output_encoded, skip_special_tokens=True)
            return output[0]
        return ""

    def get_results(self):
        if not self.output:
            return {}

        res = self.output[self.output.find("drugs"):].split("reactions")
        res[-1] = "reactions" + res[-1]

        for i in range(2):
            res[i] =  res[i].split(":")
            if "," in res[i][1]:
                res[i][1] = res[i][1].split(",")
                while "" in res[i][1]:
                    res[i][1].remove("")
        
        result = {}

        for i in res:
            result[i[0]] = i[1]
        return result



ae_model = AdverseEvents()

 


