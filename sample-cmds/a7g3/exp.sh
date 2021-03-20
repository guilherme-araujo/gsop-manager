#!/bin/bash

#SBATCH --job-name=a7g3
#SBATCH --mem=96000
#SBATCH --cpus-per-task=48
##SBATCH --hint=compute_bound
#SBATCH --mail-user=guilherme.araujo@imd.ufrn.br
#SBATCH --mail-type=ALL
#SBATCH --time=2-0:0

#module load softwares/python/3.6-anaconda-5.0.1
#module load compilers/gnu/7.3

FILE=gsop

if [ -f "$FILE" ]; then

	echo "$FILE exists"

	touch job-over.txt
	echo "scale=2; 0/10" | bc > job-percent.txt
	for i in $(seq 1 10);
	do
		python3 main.py --operation=newGraph --graphtype=ba --numNodes=200 --numEdges=4
		./$FILE samples 500 ephBonus 0.07 ephBonusB 0.03 ephStartRatio 0.6 ephBuildingRatio 0.6666 ephReusingRatio 0.1666 ephPopHistory 0 threads 4 cycles 5000 ephTime 30 ni 0 sampleId $i printPartials 1 rBMA 0.42857 rBMB 2.3333 bBA 0.95 bBB 0.95 >> a7g3.txt
		echo "scale=2; $i/1000" | bc > job-percent.txt
	done

	echo 1 > job-over.txt

else
    echo "$FILE not found."
fi
